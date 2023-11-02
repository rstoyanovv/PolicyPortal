import '../styles/articleFeedStyle.css';
import picture1 from '../assets/picture-1.png';
import picture2 from '../assets/picture-2.png';

export default function SingleArticleInFeedScreen({ article, index }) {

    const editText = (text, maxLength) => {
        if (text.length > maxLength) {
            const truncatedText = text.substring(0, maxLength) + "...";
            return truncatedText; 
        } else {
            return text; 
        }
    }

    const editedText = editText(article.article, 180);

    const image = index % 2 === 0 ? picture1 : picture2;

    return (
        <a href={`/articles/${article.id}`} class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-3xl hover:bg-gray-100 dark:border-gray-700 dark:bg-[#1c2642] dark:hover:bg-[#28375f] single-article-preview">
            <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={image} alt="political"></img>
            <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{article.title}</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{editedText}</p>
            </div>
        </a>
    );
}