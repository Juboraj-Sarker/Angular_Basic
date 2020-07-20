import { Component, OnInit, ViewChild } from '@angular/core';
import { PostService } from '../service/post.service';
import {MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material';
import {MatPaginator} from '@angular/material'


@Component({
  selector: 'app-read-from-api',
  templateUrl: './read-from-api.component.html',
  styleUrls: ['./read-from-api.component.css']
})


export class ReadFromApiComponent implements OnInit {

  public updateValue = "";
  public posts = [];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  displayedColumns: string[] = ['userId', 'id', 'title', 'body'];
  dataSource = new MatTableDataSource(this.posts);;
  
 constructor(private _postService : PostService){

}



  ngOnInit() { 

    this._postService.getPosts()
    .subscribe(data => 
      {
        
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;

        
    
      });
    
  }



  applyFilter(filterText){

    this.dataSource.filter = filterText.trim().toLowerCase();

  }

}
