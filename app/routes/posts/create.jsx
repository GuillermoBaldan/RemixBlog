export default function CreatePost () {
    return (
        <form method='POST'>
            <div>
                <label htmlFor="title" />
                <input type="text" id='title' name='title' />
            </div>
            <div>
                <label htmlFor="content" />
                <textarea type="text" id='content' name='content' />
            </div>
            <div>
                <button type='submit'>Add new post</button>
            </div>
        </form>
    )
}