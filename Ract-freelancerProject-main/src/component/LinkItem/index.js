import style from './Link.module.css';

const LinkItem = (props) => {
    return (
        <li className={style.listItem}>
            {props.children}
        </li>
    );
}

export default LinkItem;