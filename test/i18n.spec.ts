import 'mocha';
import { expect } from 'chai';
import { setGlobalLocale, getI18n, globalLocale } from '../src';


describe('i18n lite', () => {
  /**
   * globalLocale with "vi" value
   * */
  it('should set globalLocale to "vi" value', () => {
    setGlobalLocale({ locale: 'vi' });
    expect(globalLocale).to.equal('vi');
  });

  /**
   * globalLocale with "en" value
   * */
  it('should set globalLocale to "en" value', () => {
    setGlobalLocale({ locale: 'en' });
    expect(globalLocale).to.equal('en');
  });

  it('should return greeting content in English', () => {
    setGlobalLocale({ locale: 'en' });
    const i18n = getI18n({
      messages: locale => require(`./fixtures/locale/locale.${locale}.json`)
    });

    const { greeting } = i18n.messages();
    const content = greeting({
      someone: 'World',
      name: 'David',
    });
    
    expect(content).to.equal('Hi World. My name is David');
  });

  it('should return greeting content in Vietnamese', () => {
    setGlobalLocale({ locale: 'vi' });
    const i18n = getI18n({
      messages: locale => require(`./fixtures/locale/locale.${locale}.json`)
    });

    const { greeting } = i18n.messages();
    const content = greeting({
      someone: 'Thế giới',
      name: 'Dzung',
    });
    
    expect(content).to.equal('Chào Thế giới. Tên mình là Dzung');
  });
});
