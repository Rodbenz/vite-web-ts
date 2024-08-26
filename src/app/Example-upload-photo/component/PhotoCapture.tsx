import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';

const PhotoCapture: React.FC = () => {
    const webcamRef = useRef<Webcam>(null);
    const [imageSrc, setImageSrc] = useState<string | null>(null);

    const capturePhoto = () => {
        if (webcamRef.current) {
            const imageSrc = webcamRef.current.getScreenshot();
            setImageSrc(imageSrc);
        }
    };

    const handleUpload = () => {
        if (imageSrc) {
            fetch('https://your-upload-endpoint.com/upload', {
                method: 'POST',
                body: JSON.stringify({ image: imageSrc }),
                headers: { 'Content-Type': 'application/json' },
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Photo uploaded successfully:', data);
                })
                .catch(error => {
                    console.error('Error uploading photo:', error);
                });
        }
    };

    return (
        <div>
            <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={320}
                height={240}
            />
            <button onClick={capturePhoto}>Capture Photo</button>
            {imageSrc && (
                <div>
                    <img src={imageSrc} alt="Captured" />
                    <button onClick={handleUpload}>Upload Photo</button>
                </div>
            )}
        </div>
    );
};

export default PhotoCapture;
