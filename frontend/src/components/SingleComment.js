export default function SingleComment() {
    return (
        <figure class="max-w-screen-md mx-auto mt-16 text-center">
            <svg class="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
            <blockquote>
                <p class="text-2xl italic font-medium text-gray-900 dark:text-black">Let's strive for unity, understanding, and collaboration, recognizing that our collective strength lies in our ability to navigate through differences towards a more harmonious future.</p>
            </blockquote>
            <figcaption class="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture"></img>
                <div class="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                    <cite class="pe-3 font-medium text-gray-900 dark:text-black">Username 1</cite>
                    <cite class="ps-3 text-sm text-gray-500 dark:text-gray-700">Account Holder</cite>
                </div>
            </figcaption>
        </figure>
    );
}