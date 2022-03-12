import {auth} from '../../utils/firebase'
import style from './index.module.css'
const Form=({type,handler })=>{
   
    return(
        <section className={style}>
                <form onSubmit={handler}>
                    <fieldset>
                        <legend>{type}</legend>
                        <p className={style.field}>
                            <label htmlFor="email">Email</label>
                            <span className={style.input}>
                                <input type="text" name="email" id="email" placeholder="email" />
                                <span className={style.actions}></span>
                                <i className="fas fa-user"></i>
                            </span>
                        </p>
                        <p className={style.field}>
                            <label htmlFor="password">Password</label>
                            <span className={style.input}>
                                <input type="password" name="password" id="password" placeholder="Password" />
                                <span className={style.actions}></span>
                                <i className="fas fa-key"></i>
                            </span>
                        </p>
                        <input className={style.button} type="submit" value={type} />
                    </fieldset>
                </form>
          </section>
           

    )
}
export default Form