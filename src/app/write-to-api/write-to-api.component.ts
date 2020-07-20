import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';
import { User } from '../service/user';

@Component({
  selector: 'app-write-to-api',
  templateUrl: './write-to-api.component.html',
  styleUrls: ['./write-to-api.component.css']
})
export class WriteToApiComponent implements OnInit {

  
   public userModel = new User("06828", "123456");
   public user = {
    "EmpID": "06828",
    "UserPassw": "123456"
    }

  constructor(private _postService : PostService) {

   }

  ngOnInit() {

    this._postService.loginUser(this.user)
    .subscribe(data => 
      {
        
        console.log("MESSAGE FROM API: " + data);
    
      });




      


        



  }

}
