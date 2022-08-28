import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Trusted workplace',
    Svg: require('../../static/img/Cenit_IO_Data_integration.svg').default,
    description: (
      <>
        We partner with Stripe to handle KYC obligations and meet requirements for payment compliance.
      </>
    ),
  },
  {
    title: 'Transparent fee',
    Svg: require('../../static/img/Cenit_IO_Shared_resources.svg').default,
    description: (
      <>
        No hidden fee! Ebanux fee 1% + Stripe processing fee 2.9% + 30¢. Total transaction fee 3.9% + 30¢.
      </>
    ),
  },
  {
    title: 'Anywhere',
    Svg: require('../../static/img/Cenit_IO_Cloud_or_local.svg').default,
    description: (
      <>
        Sellers can use payment links to display it anywhere on the internet, just by sharing a link with customers.
      </>
    ),
  },
];


function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
