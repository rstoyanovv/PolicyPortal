import '../styles/createNewArticle.css';

export default function CreateNewArticleScreen() {
    return (
        <div className="create-new-article-container">
            <div className='new-article-heading'>
                <h2>Share your thoughts with the world here</h2>
            </div>
            <div className="input-form">
                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Tell us what you want to say</label>
                <textarea id="message" rows="4" class="block p-2.5 w-3/5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Start writing your article here..."></textarea>
            </div>
            <div className="submit-button-section">
                <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Send the article!</button>
            </div>
        </div>
    );
}