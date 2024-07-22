import s from './Modal.module.scss'
import { close } from '@/utils/images'
import { useTranslations } from 'next-intl';
import { tiyn1, tiyn10, tiyn20, tiyn50, tiyn3, tiyn5,  } from '@/utils/images'
import { sum100_2018, sum200_2018, sum500_2018, sum50_2018 } from '@/utils/images'
import { sum1_2000, sum5_2001, sum10_2001, sum10_2000 } from '@/utils/images'
import { sum1_1997, sum1_1997_nikel , sum5_1997_nikel, sum10_1997_nikel, sum1_1998, sum1_1999, sum5_1997, sum5_1998, sum5_1999, sum10_1997, sum10_1998, sum10_1999 } from '@/utils/images'



const Modal = ({currentItem, clodeModal}: {currentItem: any, clodeModal: any}) => {
    

    const t = useTranslations('Coins');

    const results = [
        {
            id: 1,
            title: t('coins1994.title'),
            data: [
                {
                    name: t('coins1994.tiyn1.name'),
                    text: t('coins1994.tiyn1.text'),
                    img: tiyn1 
                },
                {
                    name: t('coins1994.tiyn3.name'),
                    text: t('coins1994.tiyn3.text'),
                    img: tiyn3
                },
                {
                    name: t('coins1994.tiyn5.name'),
                    text: t('coins1994.tiyn5.text'),
                    img: tiyn5 
                },
                {
                    name: t('coins1994.tiyn10.name'),
                    text: t('coins1994.tiyn10.text'),
                    img: tiyn10 
                },
                {
                    name: t('coins1994.tiyn20.name'),
                    text: t('coins1994.tiyn20.text'),
                    img: tiyn20
                },
                {
                    name: t('coins1994.tiyn50.name'),
                    text: t('coins1994.tiyn50.text'),
                    img: tiyn50
                },
            ]
            
        },
        {
            id: 2,
            title: t('coins1997.title'),
            data: [
                {
                    name:  t('coins1997.sum1_1997.name'),
                    text:  t('coins1997.sum1_1997.text'),
                    img: sum1_1997
                },
                {
                    name:  t('coins1997.sum1_1997_nikel.name'),
                    text:  t('coins1997.sum1_1997_nikel.text'),
                    img: sum1_1997_nikel
                },
                {
                    name: t('coins1997.sum1_1998.name'),
                    text: t('coins1997.sum1_1998.text'),
                    img: sum1_1998
                },
                {
                    name: t('coins1997.sum1_1999.name'),
                    text: t('coins1997.sum1_1999.text'),
                    img: sum1_1999
                },
                {
                    name: t('coins1997.sum5_1997.name'),
                    text:  t('coins1997.sum5_1997.text'),
                    img: sum5_1997
                },
                {
                    name: t('coins1997.sum5_1997_nikel.name'),
                    text:  t('coins1997.sum5_1997_nikel.text'),
                    img: sum5_1997_nikel
                },
                {
                    name: t('coins1997.sum5_1998.name'),
                    text:  t('coins1997.sum5_1998.text'),
                    img: sum5_1998
                },
                {
                    name: t('coins1997.sum5_1999.name'),
                    text:  t('coins1997.sum5_1999.text'),
                    img: sum5_1999
                },
                {
                    name: t('coins1997.sum10_1997.name'),
                    text:  t('coins1997.sum10_1997.text'),
                    img: sum10_1997
                },
                {
                    name: t('coins1997.sum10_1997_nikel.name'),
                    text:  t('coins1997.sum10_1997_nikel.text'),
                    img: sum10_1997_nikel
                },
                {
                    name: t('coins1997.sum10_1998.name'),
                    text:  t('coins1997.sum10_1998.text'),
                    img: sum10_1998
                },
                {
                    name: t('coins1997.sum10_1999.name'),
                    text:  t('coins1997.sum10_1999.text'),
                    img: sum10_1999
                },
                {
                    name: t('coins1997.sum10_2000.name'),
                    text:  t('coins1997.sum10_2000.text'),
                    img: sum10_2000
                },
            ]
            
        },
        {
            id: 3,
            title: t('coins2000.title'),
            data: [
                {
                    name: t('coins2000.sum1_2000.name'),
                    text: t('coins2000.sum1_2000.text'),
                    img: sum1_2000
                },
                {
                    name:  t('coins2000.sum5_2001.name'),
                    text: t('coins2000.sum5_2001.text'),
                    img: sum5_2001
                },
                {
                    name:  t('coins2000.sum10_2001.name'),
                    text:  t('coins2000.sum10_2001.text'),
                    img: sum10_2001 
                },
            ]
            
        },
        {
            id: 4,
            title: t('coins2008.title'),
            data: [
                {
                    name: t('coins2008.sum50.name'),
                    text: t('coins2008.sum50.text'),
                    img: sum50_2018 
                },
                {
                    name: t('coins2008.sum100.name'),
                    text: t('coins2008.sum100.text'),
                    img: sum100_2018
                },
                {
                    name: t('coins2008.sum200.name'),
                    text: t('coins2008.sum200.text'),
                    img: sum200_2018
                },
                {
                    name: t('coins2008.sum500.name'),
                    text: t('coins2008.sum500.text'),
                    img: sum500_2018
                },
            ]
            
        },
    ]
    
    const item =  currentItem && results.find((el) => el.id == currentItem.id)
    
    
    console.log(item);
    
    
  return (
    <>
        <div className={s.modal} onClick={clodeModal}>
            <div className={s.modal__box} onClick={(event) => event.stopPropagation()}>
            <h2 className={s.modal__box_title}>{item.title}</h2>
            <img onClick={clodeModal} src={close.src} alt="" className={s.modal__box_close} />
            <div className={s.modal__box_block}>
                {item.data.map((el: any, i: number) => (
                    <div key={i} className={s.modal__box_item}>
                        <div className={s.modal__box_item_left}>
                            <h2 className={s.modal__box_item_left_title}>{el.name}</h2>
                            <p className={s.modal__box_item_left_text}>{el.text}</p>
                        </div>
                        <div className={s.modal__box_item_right}>
                            <img src={el.img.src} alt="" className={s.modal__box_item_right_img}/>
                        </div>
                    </div>
                ))}
                   

            </div>
            </div>
       
        </div>
    </>
  )
}

export default Modal