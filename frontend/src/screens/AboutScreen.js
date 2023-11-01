import '../styles/aboutStyle.css';

export default function AboutScreen() {
    return (
        <div style={{ margin: '3rem 6rem' }} className='text-gray-700'>
            <h1 style={{ marginBottom: '0.8rem' }}>About <span className='pp-in-text'>Policy Portal</span></h1>
            <p >Welcome to <span className="pp-in-text">Policy Portal</span>, your trusted source for insightful political analysis and commentary.</p>
            <h2>Our Mission</h2>
            <p>
                At <span className="pp-in-text">Policy Portal</span>, our mission is to deliver well-researched, non-partisan, and thought-provoking content that empowers readers to engage in informed political discourse. We believe in the power of knowledge and understanding as tools for positive change in the political landscape.
            </p>
            <h2>Our Values</h2>
            <ul class="max-w-md space-y-1 list-disc list-inside">
                <li>
                    At least 10 characters (and up to 100 characters)
                </li>
                <li>
                    At least one lowercase character
                </li>
                <li>
                    Inclusion of at least one special character, e.g., ! @ # ?
                </li>
            </ul>
            <h2>What We Cover</h2>
            <p>
                At <span className="pp-in-text">Policy Portal</span>, we cover a wide range of political topics, including:
            </p>
            <ul class="max-w-md space-y-1 list-disc list-inside">
                <li style={{marginTop: '0.8rem'}}>
                    At least 10 characters (and up to 100 characters)
                </li>
                <li>
                    At least one lowercase character
                </li>
                <li>
                    Inclusion of at least one special character, e.g., ! @ # ?
                </li>
            </ul>
            <h2>Join the Conversation</h2>
            <p>
                We invite you to become part of the conversation. Engage with us through comments, share your thoughts on social media, and subscribe to our newsletter for regular updates.
            </p>
            <h2>Contact Us</h2>
            <p>
                Have questions or feedback? Contact us at <span className="email">policy@portal.com</span>.
            </p>
            <p>
                Thank you for being a part of <span className="pp-in-text">Policy Portal</span>. Together, we can make a difference in the political world through knowledge and understanding.
            </p>
        </div>
    );
}
