import React from 'react';
import styles from './CohortDetails.module.css';

function CohortDetails({ cohort }) {
    const { name, status, startDate, endDate, participants } = cohort;
    
    // Determine heading color based on status
    const headingStyle = {
        color: status === 'ongoing' ? 'green' : 'blue'
    };

    return (
        <div className={styles.box}>
            <h3 style={headingStyle}>{name}</h3>
            <dl>
                <dt>Status</dt>
                <dd>{status}</dd>
                <dt>Start Date</dt>
                <dd>{startDate}</dd>
                <dt>End Date</dt>
                <dd>{endDate}</dd>
                <dt>Participants</dt>
                <dd>{participants}</dd>
            </dl>
        </div>
    );
}

export default CohortDetails;