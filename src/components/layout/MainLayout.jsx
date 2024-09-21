import classNames from 'classnames';
import { Link } from 'react-router-dom';
import {  useSelector } from 'react-redux';

const navItems = [
    {
        title: 'Getting Started',
        links: [
            { href: '#', text: 'Introduction' },
            { href: '#', text: 'Installation' },
        ],
    },
    {
        title: 'Components',
        links: [{ href: '/components/sidebar', text: 'Sidebar' }],
    },
];

export default function MainLayout({children}) {

    const isSidebarOpen = useSelector(state=>state.sidebar.isOpened)
  

    return (
        <div className="flex flex-col md:flex-row min-h-[90vh]">
         
            <aside
                className={classNames(
                    'bg-background p-4 md:p-0 top-20 md:top-0 md:block fixed inset-y-0 left-0 z-50 w-64 translate-x-0 transform overflow-y-auto  transition duration-200 ease-in-out md:relative md:translate-x-0 md:dark:bg-transparent',
                    { 'hidden': !isSidebarOpen },
                )}
            >
           
                <nav>
                    {navItems.map((section, index) => (
                        <div key={index} className="mb-6">
                            <h2 className="mb-2 text-base font-medium">
                                {section.title}
                            </h2>
                            <ul>
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex} className="mb-1">
                                        <Link
                                            to={link.href}
                                            className="text-muted-foreground hover:text-primary text-sm transition-colors hover:underline"
                                        >
                                            {link.text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </nav>
            </aside>

            {/* Main content */}
            <main className="hide_scrollbar sectionCustomHeight w-full flex-1  p-4 md:p-8  bg-gray-50 dark:bg-transparent">
                {children}
                {/* <h1 className="mb-2 text-3xl font-bold">{title}</h1>
                <p className="text-muted-foreground mb-6 text-sm">
                    {description}
                </p> */}

                {/* <div className="mb-4">
                    <button
                        className={`mr-4 pb-2 ${
                            activeTab === 'preview'
                                ? 'border-primary border-b-2 font-semibold'
                                : 'text-muted-foreground'
                        }`}
                        onClick={() => setActiveTab('preview')}
                    >
                        Preview
                    </button>
                    <button
                        className={`pb-2 ${
                            activeTab === 'code'
                                ? 'border-primary border-b-2 font-semibold'
                                : 'text-muted-foreground'
                        }`}
                        onClick={() => setActiveTab('code')}
                    >
                        Code
                    </button>
                </div>

                <div className="overflow-hidden rounded-md border">
                    {activeTab === 'preview' ? (
                        <div className="sm:p-8">{children}</div>
                    ) : (
                        <div className="relative">
                            <pre className="bg-muted overflow-x-auto rounded-md p-8">
                                <code className="text-sm">{'codeSnippet'}</code>
                            </pre>
                        </div>
                    )}
                </div> */}
            </main>
        </div>
    );
}
