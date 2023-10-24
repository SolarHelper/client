import React from 'react';
import classes from './Specialists.module.scss';
import { SpecialistProps } from './Specialist.types';
const Specialists = ({ infoSpecialist }: { infoSpecialist: Array<SpecialistProps> }) => {
  return (
    <div className={classes.wrapper}>
      <h1 className={classes.title}>Большой выбор специалистов</h1>

      <div className={classes.textWrapper}>
        {infoSpecialist.map((item, index) => (
          <div className={classes.text} key={index}>
            <div className={classes.divFirst}>
              <p className={classes.paragraphFirst}>{item.title}</p>
            </div>
            <div className={classes.divSecond}>
              <p className={classes.paragraphSecond}>{item.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specialists;
