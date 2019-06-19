import {Component, OnInit} from '@angular/core';
import {ServerService} from "./server.service";
import {filter} from "rxjs/operators";
import {RecordModel} from "./RecordModel";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent implements OnInit{
  todoArray: RecordModel[] = [];
  private filteredRecords: RecordModel[] = [];
  todo;

  constructor(private service: ServerService) {}

  ngOnInit() {
    this.service.getData().pipe( filter(data => !!data)).subscribe((records: RecordModel[]) => {
      records.forEach((record: RecordModel) => {
        let newRecord: RecordModel = new RecordModel(record.id, record.text, record.tags);
        this.todoArray.push(newRecord)
        newRecord = null;
      })
    })
  }

  filterRecords(tag: string): void {

    if (tag === '') {
      this.filteredRecords = [];
    }

    this.todoArray.forEach((record: RecordModel) => {
      record.tags.forEach(currentTag => {
        if (tag === currentTag) {
          this.filteredRecords.push(record);
        }
      })
    })
  }

  addTodo(value): void {
    if (value!=="" && !value.includes("#")) {

      let newRecord: RecordModel = new RecordModel(this.todoArray.length,value,[]);
      this.todoArray.push(newRecord);
    } else {
      let recordWithTags: RecordModel = new RecordModel(this.todoArray.length, value, this.findHashtags(value));
      this.todoArray.push(recordWithTags);
    }
  }

  addNewTags(todo: RecordModel, recordText): void {
    this.todoArray.forEach((record: RecordModel) => {
      if (todo === record) {
        this.findHashtags(recordText).forEach(tag =>{
          if (!record.tags.includes(tag)) {
            record.tags.push(tag);
          }
        })
      }
    })
  }

  deleteTag(tag: string): void {
    this.todoArray.forEach((record: RecordModel) => {
      record.tags.forEach((currentTag) => {
        if (tag === currentTag) {
          record.tags.splice(record.tags.indexOf(currentTag), 1);
          return;
        }
      })
    })
  }

  private findHashtags(tagString: string): string[] {
    let tagListArray = [];
    let regexp = new RegExp('#([^\\s]*)', 'g');
    let tmplist = tagString.match(regexp);
    for (let w in tmplist) {
      let hashSub = tmplist[ w ].split('#');
      for (let x in hashSub) {
        if (hashSub[x] != "")
        {
          if (hashSub[x].substr(hashSub[x].length - 1) == ":")
          {
            hashSub[x] = hashSub[x].slice(0, -1);
          }
          if (hashSub[x] != "") {
            let resultWord: string = `#${hashSub[x]}`;
            tagListArray.push(resultWord);
          }
        }
      }
    }
    return tagListArray;
  }

  deleteItem(todo){
    for(let i=0 ;i<= this.todoArray.length ;i++){
      if(todo == this.todoArray[i]){
        this.todoArray.splice(i,1)
      }
    }
  }

  todoSubmit(value){
    if(value!==""){
      this.todoArray.push(value.todo);
    }else{
      alert('Field required **')
    }
  }
}
