import React from 'react';
import { Helmet } from 'react-helmet';

const Success = () => {
    return (
        <div>
            {/* react helmet for dynamic tab name */}
            <Helmet>
                <title>Thank you | Watch Station</title>
            </Helmet>

            <h3>Thank you purchase</h3>
        </div>
    );
};

export default Success;