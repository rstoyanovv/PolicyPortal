export default function WelcomeScreen() {
    return (
        <section class="bg-white dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
                <div class="bg-gray-50 dark:bg-[#1c2642] border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
                    <h1 class="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">Welcome to your <span style={{color: 'rgb(29 78 216)'}}>Policy Portal</span></h1>
                    <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">Here you can share your opinion on current topics and get to know the positions of others. Be in!</p>
                    <a href="#" class="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                        See our feed
                    </a>
                </div>
                <div class="grid md:grid-cols-2 gap-8">
                    <div class="bg-gray-50 dark:bg-[#1c2642] border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                        <h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Something has struck you?</h2>
                        <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">You can always share with the community your opinion on actual questions.</p>
                        <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">Write here
                            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                    <div class="bg-gray-50 dark:bg-[#1c2642] border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                        <h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Keep yourself posted</h2>
                        <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">Be informed with BBC News, CNN, AP, Fox News and many others</p>
                        <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">See here
                            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>

    );
}