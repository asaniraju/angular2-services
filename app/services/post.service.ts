import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/operator/map';

interface Post{
	_id:number,
	title:string,
	body:string
}

@Injectable()

export class PostService{
	private posts: any[];
	private apiUrl:string;
	private postData:any;

	constructor(private _http:Http){
		this.apiUrl="https://jsonplaceholder.typicode.com/posts"
		// this.posts=[{
		// 	title:'Hello Bangalore',
		// 	body:'i am wishing good morning to every body!!!'
		// },
		// {
		// 	title: 'latest updates',
		// 	body:'why do you need latest updates ?'
		// },
		// {
		// 	title:'who is john galt?',
		// 	body:'John galt is the man og highest virtue !!!'
		// },
		// {
		// 	title:'I am Home',
		// 	body:'I am done for the day and going home!!'
		// }]
	}

	getPosts() : Obesevable<Post[]>{
		return this._http
				.get(this.apiUrl)
				.map(function(response){
					return response.json()	
			});
		
		//this._http.get(this.apiUrl)
		//return this.posts;
	}

	addPost(newPost: any){
			this.posts.push(newPost);
	}

}