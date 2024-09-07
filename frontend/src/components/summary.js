import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './summary.css';

function Summary() {
    const [inputText, setInputText] = useState('');
    const [summaryText, setSummaryText] = useState('');

    const handleSummarize = () => {
        axios.get(`http://localhost:8000/backend/summary/`, { input_txt : inputText })
        .then(response => {
            setSummaryText(response.data);
            setInputText('');
          })
        .catch(error => {
            console.error('There was an error fetching the texts!', error);
          });
    };

    return (
        <div className="container">
            <nav className="navbar">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img 
                            src="/images/logo_banner.png" 
                            alt="Logo" 
                            width="150"
                            height="40"
                            className="d-inline-block align-text-top"
                        />
                    </a>
                </div>
            </nav>
            
            <div className="container">
                <div className="row">
                    {/* Input Section */}
                    <div className="col-md-6">
                        <div className="card summary-card mt-4 p-4">
                            <div className="form-group">
                                <textarea
                                    id="summaryTextArea"
                                    className="form-control"
                                    rows="10"
                                    placeholder='Enter or paste your text and press "Summarize."'
                                    value={inputText}
                                    onChange={(e) => setInputText(e.target.value)}
                                ></textarea>
                            </div>

                            {/* Summarize Button */}
                            <div className="text-center mt-3">
                                <button className="btn btn-success btn-lg" onClick={handleSummarize}>
                                    Summarize
                                </button>
                            </div>

                            {/* Upload Section */}
                            <div className="upload-section text-center mt-3">
                                <Link to="/upload_file/">
                                    <button type="button" class="btn btn-link">Upload Docs</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Output Section */}
                    <div className="col-md-6">
                        <div className="card summary-card mt-4 p-4">
                            <div className="form-group">
                                <label htmlFor="outputTextArea" className="form-label">
                                    Summarized Text
                                </label>
                                <textarea
                                    id="outputTextArea"
                                    className="form-control"
                                    rows="13"
                                    value={summaryText}
                                    readOnly
                                ></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Summary;