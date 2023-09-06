import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-to-list',
  templateUrl: './to-list.component.html',
  styleUrls: ['./to-list.component.css']
})
export class ToListComponent implements OnInit {

  formGroupDtl = new FormGroup({
    itemName: new FormControl('')
  });
  toDoListData: any = [];
  constructor() { }

  ngOnInit(): void {
  }

  addItem(){
    console.log('111 add', this.formGroupDtl);
    this.toDoListData.push({
      itemName: this.formGroupDtl.value.itemName
    });
    this.formGroupDtl.reset();
  }

  clearItem(){
    this.formGroupDtl.reset();
  }

  removeItem(idx: any, itemName: any){
    console.log('i  ',idx)
    // this.toDoListData.splice(idx,1)
    this.toDoListData = this.toDoListData.filter((node: any,index: any) => {
      console.log('111 index ', index);
      node.itemName !== itemName && index !== idx
    })
  }

}
