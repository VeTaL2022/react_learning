import {useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {postService} from "../../services";

export function PostDetailsPage() {

    let {state} = useLocation();
    let [post,setPost] = useState(state);
    let {id} = useParams();

    useEffect(() => {
        if(!state){
            postService.getById(id).then(({data}) => setPost(data))
        } else {
            setPost(state)
        }
    },[id,state])

    return(
        <div>
            {post && <div>{JSON.stringify(post)}</div>}
        </div>
    )

}