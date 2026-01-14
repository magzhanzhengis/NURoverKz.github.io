import { useTranslation } from 'react-i18next'

import ProfileCard from 'src/components/common/ProfileCard'
// importing images
import imgGourav from '/assets/img/advisers/Gourav.jpg'
import imgYussuf from '/assets/img/team/ex/Yussuf.jpg'
import imgHeghine from '/assets/img/team/Heghine.webp'

const Mentors = () => {
    const { t } = useTranslation('translation', { keyPrefix: 'mentors' });

    return (
        <div id="advisers" className='w-full py-16 lg:py-20'>
            <div className='max-w-[1240px] mx-auto px-4'>

                <h1 className='text-primary md:text-5xl sm:text-4xl text-3xl font-bold md:py-6 text-center'>{t('header')}</h1>
                <p className='font-light lg:font-normal text-center mt-2 mb-8'>{t('caption')}</p>

                <div className="flex justify-center gap-8 mx-auto flex-wrap">
                    <div className="flex-grow-0 flex-shrink-0 basis-full md:basis-1/4">
                        <ProfileCard fullname={t('infoGourav.fullname')} img={imgGourav} />
                    </div>

                    <div className="flex-grow-0 flex-shrink-0 basis-full md:basis-1/4">
                        <ProfileCard fullname={t('infoYussuf.fullname')} img={imgYussuf} />
                    </div>
                    <div className="flex-grow-0 flex-shrink-0 basis-full md:basis-1/4">
                        <ProfileCard fullname={t('infoHeghine.fullname')} img={imgHeghine} />
                    </div>

                    
                </div>
            </div>
        </div>
    )
}

export default Mentors