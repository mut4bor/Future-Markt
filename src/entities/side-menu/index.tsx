import styles from './style.module.scss';
import { SideMenuInput } from './side-menu-input';
import { SideMenuCheckbox } from './side-menu-checkbox';
import { SideMenuCancelButton } from './side-menu-cancel-button';
import { SideMenuSubmitButton } from './side-menu-submit-button';
import { SideMenuHeading } from './side-menu-heading';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'shared/api/redux/hooks';
import { SideMenuThanks } from './side-menu-thanks';
import {
  thanksVisibleVisibleToggled,
  userDataChanged,
} from 'shared/api/redux/slices/sideMenu';

export function SideMenu() {
  const [checked, setChecked] = useState(false);

  const { sideMenuVisible, thanksVisible } = useAppSelector(
    (state) => state.sideMenu
  );

  const [nameValue, setNameValue] = useState('');
  const [telValue, setTelValue] = useState('');

  const dispatch = useAppDispatch();

  useEffect(() => {
    const userData = localStorage.getItem('userData');
    const parsedUserData = userData
      ? JSON.parse(userData)
      : {
          name: '',
          tel: '',
        };
    setNameValue(parsedUserData.name);
    setTelValue(parsedUserData.tel);
  }, []);

  return (
    <div
      className={`${styles.container} ${sideMenuVisible ? styles.visible : ''}`}
    >
      <SideMenuCancelButton />

      {thanksVisible ? (
        <SideMenuThanks />
      ) : (
        <>
          <SideMenuHeading />
          <SideMenuInput
            value={nameValue}
            onChange={(event) => {
              setNameValue(event.target.value);
            }}
            type="text"
            placeholder="Имя"
          />
          <SideMenuInput
            value={telValue}
            onChange={(event) => {
              setTelValue(event.target.value);
            }}
            type="tel"
            placeholder="Телефон"
          />
          <SideMenuCheckbox
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
          <SideMenuSubmitButton
            onClick={() => {
              dispatch(
                userDataChanged({
                  name: nameValue,
                  tel: telValue,
                })
              );
              dispatch(thanksVisibleVisibleToggled(true));
            }}
            disabled={checked === false || !nameValue || !telValue}
          />
        </>
      )}
    </div>
  );
}
