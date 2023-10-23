import React from 'react';
import classes from './Services.module.scss';
import Image from 'next/image';
interface titleParams {
  title: string;
  paragraph: string;
  image: string;
}
const Services = ({infoPanel}:{
  infoPanel: Array<titleParams>;
}) => {
  return (
    <div className={classes.wrapper}>
      <h2 className={classes.serviceTitle}>Почему выгодно пользоваться сервисом Solar Helper?</h2>
      <div className={classes.serviceItems}>
      {
        infoPanel.map(item =>(
          <div className={classes.serviceItemWrapper}>
            <div className={classes.serviceItem}>
              <Image className={classes.image} width={60} height={60} src={item.image} alt="" />
              <p className={classes.paragraphFirst}>{item.title.toUpperCase()}</p>
              <p className={classes.paragraphSecond}>{item.paragraph}</p>
            </div>
          </div>
        ))
      }
      </div>
    </div>
  );
};

export default Services;