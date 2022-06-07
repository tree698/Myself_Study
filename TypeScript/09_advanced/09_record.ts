{
  type PageInfo = {
    title: string;
  };

  type Page = 'home' | 'about' | 'contact';

  const nav: Record<Page, PageInfo> = {
    home: { title: 'home' },
    about: { title: 'about' },ㅏ
    contact: { title: 'contact' },
  };

  console.log(nav);
}
