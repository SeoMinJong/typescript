/**
 * Pick Type
 * 해당 오브젝트에서 원하는 값만 입력받을 수 있게끔 강제함
 */
interface Post{
    title:string;
    content:string;
    createdAt:Date;
}

function createPost(post: Pick<Post, 'title'|'content'>): Post{
    return {
        ...post,
        createdAt: new Date(),
    }
}

createPost({
    title:'first title',
    content:'first content',
})


