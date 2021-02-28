import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile(){
    const {level} = useContext(ChallengesContext);
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/BeatrizMiotto.png" alt="Beatriz Miotto"/>
            <div>
                <strong>Beatriz Miotto</strong>
                <p>
                    <img src="icons/level.svg" alt="level" />
                    Level {level}</p>
            </div>
        </div>
    );
}