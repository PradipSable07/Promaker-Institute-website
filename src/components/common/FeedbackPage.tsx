import { Link } from 'lucide-react';
import React from 'react';

const FeedbackPage = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-white py-16 px-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-8 text-center text-sky-400">
                    Your Feedback Matters
                </h1>
                <p className="text-gray-300 text-center mb-8">
                    Please take a few moments to share your thoughts and help us improve.
                </p>
                <div className="w-full">
                    <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLSfSRu3hO266FjR7Bz8V-JZmnLSN9MxEDYGp5QlXN00wIm8M9w/viewform?usp=sharing"  // Replace with your actual Google Form URL
                        width="100%"
                        height="800"  // Adjust the height as needed
                       
                        title="Feedback Form"
                    >
                        Loading...
                    </iframe>
                </div>
                
            </div>
        </div>
    );
};

export default FeedbackPage;
