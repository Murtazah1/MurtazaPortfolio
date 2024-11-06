// pages/resume.tsx
import React from "react";

const Resume: React.FC = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <iframe
                src="/Murtaza_Resume.pdf"
                className="w-full h-full max-w-4xl"
                title="Resume"
            />
        </div>
    );
};

export default Resume;
