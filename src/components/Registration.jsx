import React from 'react';

import "../css/Registration.css";

import Footer from './Footer';

export default function Registration() {
    return (
        <div className="registration">
            <div className="registration-main-container">
                <div className="heading-container">
                    <h1 className="heading-text">REGISTER</h1>
                </div>
                <div className="line-container"></div>
                <div className="form-box">
                    <Box>
                        <Title
                            sx={{
                                textAlign: 'center',
                            }}
                            order={2}
                        >
                            Hey there!
                        </Title>
                        {/* Steps */}
                        <Button>Submit</Button>
                    </Box>
                </div>
            </div>
            <Footer />
        </div>
    )
}
