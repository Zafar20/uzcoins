'use client'
import s from './Coins.module.scss'
import { useTranslations } from 'next-intl';
import Modal from './Modal';
import { useState } from 'react';
import { tiynAll, allSum2018, allSum2001, allSum1997 } from '@/utils/images';



const Coins = () => {
    
    const t = useTranslations('Coins');
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [currentItem, setCurrentItem] = useState(null)
    
    const openModal = (item: any) => {
      setCurrentItem(item)
      setIsModalOpen(true)
    }
    
    const clodeModal = () => {
      setIsModalOpen(false)
    }
    
    
    const coinsData = [
        {
          id: 1,
          title: t('coins1994.title'),
          info: [
            t('coins1994.text1'),
            t('coins1994.text2'),
            t('coins1994.text3'),
          ],
          img: tiynAll,
        },
        {
          id: 2,
          title: t('coins1997.title'),
          info: [
            t('coins1997.text1'),
            t('coins1997.text2'),
            t('coins1997.text3'),
          ],
          img: allSum1997,
        },
        {
          id: 3,
          title: t('coins2000.title'),
          info: [
            t('coins2000.text1'),
            t('coins2000.text2'),
            t('coins2000.text3'),
          ],
          img: allSum2001,
        },
        {
          id: 4,
          title: t('coins2008.title'),
          info: [
            t('coins2008.text1'),
            t('coins2008.text2'),
            t('coins2008.text3'),
          ],
          img: allSum2018,
        },
    ]
    
    
  return (
    <>
         <section className={s.coins} id="section2">
            <div className="container">
                <div className={s.coins__box}>
                    <h2 className={s.coins__box_title}>{t('title')}</h2>
                         <div className={s.coins__box_list}>
                            {coinsData.map((item) => (
                              <div key={item.id} className={s.coins__box_item}>
                                <div className={s.coins__box_item_left}>
                                    <h2 className={s.coins__box_item_left_title}>{item.title}</h2>
                                    <ul className={s.coins__box_item_left_list}>
                                      {item.info.map((el,i) => (
                                        <li key={i} className={s.coins__box_item_left_li}>{el}</li>
                                      ))}
                                    </ul>
                                    <button onClick={() => openModal(item)} className={s.coins__box_item_left_btn}>{t('btn')}</button>
                                </div>
                                <div className={s.coins__box_item_right}>
                                  <img src={item.img.src} alt="" className={s.coins__box_item_right_img} />
                                </div>
                              </div>
                            ))}
                     </div>    
                </div>
            </div>
            {isModalOpen &&  <Modal currentItem={currentItem} clodeModal={clodeModal}/>}
           
        </section>
    </>
  )
}

export default Coins