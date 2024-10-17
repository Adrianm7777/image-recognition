"use client";
import { useState } from "react";

const Home = () => {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:8000/api/upload/", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setResult(`Class: ${data.class}, Confidence: ${data.confidence}`);
    } catch (error) {
      console.error("Error uploading the image:", error);
      setResult("Error occurred while uploading");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Image Recognition</h1>
      <input type="file" onChange={handleFileChange} className="mb-4" />
      <button
        onClick={handleUpload}
        disabled={!file || loading}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        {loading ? "Uploading..." : "Upload Image"}
      </button>
      {result && (
        <div className="mt-6 p-4 bg-white shadow-md rounded">
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

export default Home;
