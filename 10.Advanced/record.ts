{
    type PageInfo = {
        title: string;
    }

    type Page = "home" | 'about' | 'contact';

    // 한 페이지당 페이지인포를 묶어 준다.  키 : 값
    const navigate: Record<Page, PageInfo> = {
        home: { title: 'Home' },
        about: { title: 'about' },
        contact: { title: 'contact' },
    }
}