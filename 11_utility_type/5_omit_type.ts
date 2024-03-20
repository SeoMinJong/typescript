/**
 * Omit Type
 * 해당 오브젝트에서 특정 프로퍼티의 값을 입력받지 않게함
 */
interface Post{
    title:string;
    content:string;
    createdAt:Date;
}

function createPost(post: Omit<Post, 'createdAt'>): Post{
    return {
        ...post,
        createdAt: new Date(),
    }
}

createPost({
    title:'first title',
    content:'first content',
})


