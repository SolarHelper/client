import React from 'react';
import classes from './Services.module.scss';
import Image from 'next/image';
import { ServiceProps } from './Service.types';

const Services = ({ infoPanel }: { infoPanel: Array<ServiceProps> }) => {
  return (
    <div className={classes.wrapper}>
      <h2 className={classes.serviceTitle}>Почему выгодно пользоваться сервисом Solar Helper?</h2>

      <div className={classes.serviceItems}>
        {infoPanel.map((item, index) => (
          <div className={classes.serviceItemWrapper} key={index}>
            <div className={classes.serviceItem}>
              <Image
                className={classes.image}
                width={60}
                height={60}
                sizes="(max-width: 768px) 40px"
                src={item.image}
                alt=""
              />

              <p className={classes.paragraphFirst}>{item.title.toUpperCase()}</p>

              <p className={classes.paragraphSecond}>{item.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
