import '../styles/aboutStyle.css';

export default function AboutScreen() {
    return (
        <div style={{ margin: '3rem 6rem'}} className='text-gray-700'>
            <h1 style={{ marginBottom: '0.8rem'}}>About <span className='pp-in-text'>Policy Portal</span></h1>
            <p >Welcome to <span className="pp-in-text">Policy Portal</span>, your trusted source for insightful political analysis and commentary.</p>
            <h2>Our Mission</h2>
            <p>
                At <span className="pp-in-text">Policy Portal</span>, our mission is to deliver well-researched, non-partisan, and thought-provoking content that empowers readers to engage in informed political discourse. We believe in the power of knowledge and understanding as tools for positive change in the political landscape.
            </p>
            <h2>Our Values</h2>
            <ul>
                <li style={{marginTop: '0.2rem'}}><strong>Unbiased Reporting:</strong> We are committed to providing unbiased and fact-based reporting. Our analysis is free from partisan influence, allowing readers to form their own opinions.</li>
                <li><strong>Transparency:</strong> We believe in transparency and accountability. If we make a mistake, we correct it promptly.</li>
                <li><strong>Respectful Discourse:</strong> We encourage respectful and open discourse. We welcome readers from all political backgrounds and value diverse perspectives.</li>
            </ul>
            <h2>What We Cover</h2>
            <p>
                At <span className="pp-in-text">Policy Portal</span>, we cover a wide range of political topics, including:
            </p>
            <ul>
                <li style={{marginTop: '0.2rem'}}><strong>National Politics:</strong> In-depth analysis of national policies, elections, and government decisions.</li>
                <li><strong>International Relations:</strong> Examination of global politics, diplomacy, and international events.</li>
                <li><strong>Local Politics:</strong> Insights into regional politics and its impact on communities.</li>
                <li><strong>Opinion Pieces:</strong> Personal essays and editorials to share our thoughts and encourage dialogue.</li>
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
