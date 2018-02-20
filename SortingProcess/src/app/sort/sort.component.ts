import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class SortComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  private sortData(n, ID: String) {
    let rows: Array<any>, x: any, y: any,dom: any = ID;
    let i: number, j: number, switchcount: number = 0;
    let shouldSwitch: boolean, switching: boolean = true;;
    let tagName: string = dom.tagName, dir: string = "asc";

    while (switching) {
      switching = false;
      if (tagName == "TABLE")
        rows = dom.querySelectorAll("tr");
      if (tagName == "UL" || tagName == "OL")
        rows = dom.querySelectorAll("LI");
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        if (tagName == "TABLE") {
          x = rows[i].querySelectorAll("td")[n.target.cellIndex].firstChild.data;
          y = rows[i + 1].querySelectorAll("td")[n.target.cellIndex].firstChild.data;
        }
        if (tagName == "UL" || tagName == "OL") {
          j = i - 1;
          x = rows[j].firstChild.data;
          y = rows[j + 1].firstChild.data;
        }
        if (x.toLowerCase().match(/[a-z]/i) || y.toLowerCase().match(/[a-z]/i)) {
          if (dir == "asc") {
            if (x > y) {
              shouldSwitch = true;
              break;
            }
          } else if (dir == "desc") {
            if (x < y) {
              shouldSwitch = true;
              break;
            }
          }
        }//con String
        else {
          if (dir == "asc") {
            if (Number(x) > Number(y)) {
              shouldSwitch = true;
              break;
            }
          } else if (dir == "desc") {
            if (Number(x) < Number(y)) {
              shouldSwitch = true;
              break;
            }
          }
        }
      }//for
      if (shouldSwitch) {
        if (tagName == "UL" || tagName == "OL")
          rows[j].parentNode.insertBefore(rows[j + 1], rows[j]);
        if (tagName == "TABLE")
          rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchcount++;

      } else {
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }//while
  }//sortTable
}
