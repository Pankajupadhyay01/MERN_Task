import React from 'react';

function Footer() {
    return (
        <footer className="bg-black text-white py-8">
            <div className="max-w-4xl mx-auto text-center text-sm">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                        <h5 className="font-bold mb-2">Abstract</h5>
                        <ul>
                            <li>Branches</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-bold mb-2">Resources</h5>
                        <ul>
                            <li>Blog</li>
                            <li>Help Center</li>
                            <li>Release Notes</li>
                            <li>Status</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-bold mb-2">Community</h5>
                        <ul>
                            <li>Twitter</li>
                            <li>LinkedIn</li>
                            <li>Facebook</li>
                            <li>Dribbble</li>
                            <li>Podcast</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-bold mb-2">Company</h5>
                        <ul>
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Legal</li>
                        </ul>
                    </div>
                </div>
                <p className="mt-4">&copy; Copyright 2022 Abstract Studio Design, Inc. All rights reserved</p>
            </div>
        </footer>
    );
}

export default Footer;
