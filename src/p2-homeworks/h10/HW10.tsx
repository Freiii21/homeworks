import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from './bll/store';
import {loadingAC, PreloaderType} from './bll/loadingReducer';
import {Preloader} from './Preloader/Preloader';

function HW10() {
    const dispatch = useDispatch();
    const isloading = useSelector<AppStoreType, PreloaderType>(state => state.loading)

    const setLoading = () => {
        dispatch(loadingAC(true));
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 3000);
        console.log('loading...')
    };

    return (
        <div style={{marginLeft: '12px'}}>
            <hr/>
            <div style={{fontStyle: 'italic', marginBottom: '10px'}}>homeworks 10</div>

            {isloading.isLoading
                ? (
                    <Preloader/>
                ) : (
                    <div>
                        <SuperButton style={{
                            width: '120px', backgroundColor: 'darkgrey', color:"blueviolet",
                            borderColor: 'blueviolet', fontWeight: 'lighter'
                        }} onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            {/*<hr/>*/}
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
