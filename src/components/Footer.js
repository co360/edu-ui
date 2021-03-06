import React from 'react'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className="bg-gray-900 border-t border-gray-400 shadow">
      <div className="container max-w-md mx-auto flex py-8">
        <div className="w-full mx-auto flex flex-wrap">
          <div className="flex w-full md:w-1/3 ">
            <div className="px-8">
              <h3 className="font-bold text-gray-100">{t('about')}</h3>
              <p className="py-4 text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas vel mi ut felis tempus commodo nec id erat. Suspendisse
                consectetur dapibus velit ut lacinia.
              </p>
            </div>
          </div>

          <div className="flex w-full md:w-1/3">
            <div className="px-8">
              <h3 className="font-bold text-gray-100">{t('social')}</h3>
              <ul className="list-reset items-center text-sm pt-3">
                <li />
                <li />
              </ul>
            </div>
          </div>
          <div className="flex w-full md:w-1/3">
            <div className="px-8">
              <h3 className="font-bold text-gray-100 text-center">
                {t('language')}
              </h3>
              <ul className="list-reset items-center text-sm pt-3">
                <li>
                  <LanguageSwitcher />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
