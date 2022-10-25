import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/post.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  public updateForm: FormGroup
  postRef: any

  constructor( public postService: PostService, public formBuilder: FormBuilder, private activateRouter: ActivatedRoute, private router: Router) {
    this.updateForm= this.formBuilder.group({
      title:[''],
      content:[''],
      author:['']
    })
   }

  ngOnInit(): void {
    const id= this.activateRouter.snapshot.paramMap.get('id')
    this.postService.getPostById(id).subscribe( res =>{
      this.postRef = res
      this.updateForm = this.formBuilder.group({
        title: [this.postRef.title],
        content:[this.postRef.content],
        author:[this.postRef.author],
      })
    })
    console.log("from update ",id)
  }

  onSubmit(){
    const id= this.activateRouter.snapshot.paramMap.get("id")
    this.postService.updatePost(this.updateForm.value, id)
    this.router.navigate([''])
  }

}
