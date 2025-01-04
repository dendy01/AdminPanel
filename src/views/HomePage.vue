<template>
    <Sidebar
        title="Materio"
        :li="sidebar"
    />
    <VMain />
</template>

<script setup lang="ts">
import Article from '@/assets/icons/article.svg';
import BankCard from '@/assets/icons/back-card.svg';
import BarChart from '@/assets/icons/bar-chart.svg';
import Bill from '@/assets/icons/bill.svg';
import Box from '@/assets/icons/box.svg';
import Calendar from '@/assets/icons/calendar.svg';
import Car from '@/assets/icons/car.svg';
import Chat from '@/assets/icons/chat.svg';
import Checkbox from '@/assets/icons/checkbox.svg';
import DragDrop from '@/assets/icons/drag-drop.svg';
import FromtPages from '@/assets/icons/front-pages.svg';
import GitCommit from '@/assets/icons/git-commit.svg';
import Graduation from '@/assets/icons/graduation.svg';
import Grid from '@/assets/icons/grid.svg';
import HomeSmile from '@/assets/icons/home-smile.svg';
import LayoutLeft from '@/assets/icons/layout-left.svg';
import Layout from '@/assets/icons/layout.svg';
import Lifebuoy from '@/assets/icons/lifebuoy.svg';
import Lock from '@/assets/icons/lock.svg';
import Mail from '@/assets/icons/mail.svg';
import Map from '@/assets/icons/map.svg';
import Radio from '@/assets/icons/radio.svg';
import Remixicon from '@/assets/icons/remixicon.svg';
import Shield from '@/assets/icons/shield.svg';
import Shop from '@/assets/icons/shop.svg';
import Tables from '@/assets/icons/tables.svg';
import Toggle from '@/assets/icons/toggle.svg';
import TV from '@/assets/icons/tv.svg';
import User from '@/assets/icons/user.svg';
import Sidebar from '@/components/Sidebar/VSidebar.vue';
import { ISidebarGroup } from '@/model/layout/Sidebar';
import { provide, shallowRef, useId } from 'vue';

import Notification from '@/assets/icons/icons-header/notification.svg';
import Star from '@/assets/icons/icons-header/star.svg';
import Sun from '@/assets/icons/icons-header/sun.svg';
import Translate from '@/assets/icons/icons-header/translate.svg';
import VMain from '@/views/MainPage.vue';
import { IHeaderGroup } from '@/model/layout/Header';
import { Routes } from '@/routes/modelRoutes.ts';

const header = shallowRef<IHeaderGroup[]>([
    {
        id: useId(),
        icon: Translate,
        group: [
            {
                id: useId(),
                content: 'English'
            },
            {
                id: useId(),
                content: 'French'
            },
            {
                id: useId(),
                content: 'Arabic'
            },
            {
                id: useId(),
                content: 'Russian'
            }
        ]
    },
    {
        id: useId(),
        icon: Sun,
        group: [
            {
                id: useId(),
                content: 'English'
            },
            {
                id: useId(),
                content: 'French'
            },
            {
                id: useId(),
                content: 'Arabic'
            },
            {
                id: useId(),
                content: 'Russian'
            }
        ]
    },
    {
        id: useId(),
        icon: Star,
        group: [
            {
                id: useId(),
                content: 'English'
            },
            {
                id: useId(),
                content: 'French'
            },
            {
                id: useId(),
                content: 'Arabic'
            },
            {
                id: useId(),
                content: 'Russian'
            }
        ]
    },
    {
        id: useId(),
        icon: Notification,
        group: [
            {
                id: useId(),
                content: 'English'
            },
            {
                id: useId(),
                content: 'French'
            },
            {
                id: useId(),
                content: 'Arabic'
            },
            {
                id: useId(),
                content: 'Russian'
            }
        ]
    }
]);

provide('header', header);

const sidebar = shallowRef<ISidebarGroup[]>([
    {
        id: useId(),
        group: [
            {
                id: useId(),
                content: 'Dashboards',
                icon: HomeSmile,
                select: [
                    {
                        id: useId(),
                        content: 'CRM'
                    }, {
                        id: useId(),
                        content: 'Analitics'
                    },
                    {
                        id: useId(),
                        content: 'eCommerce'
                    },
                    {
                        id: useId(),
                        content: 'Logistics'
                    },
                    {
                        id: useId(),
                        content: 'Academy'
                    }
                ]
            },
            {
                id: useId(),
                content: 'Layouts',
                icon: Layout,
                select: [
                    {
                        id: useId(),
                        content: 'Collapsed menu'
                    },
                    {
                        id: useId(),
                        content: 'Content navbar'
                    },
                    {
                        id: useId(),
                        content: 'Content nav + Sidebar'
                    },
                    {
                        id: useId(),
                        content: 'Horizontal'
                    },
                    {
                        id: useId(),
                        content: 'Without menu'
                    },
                    {
                        id: useId(),
                        content: 'Without navbar'
                    },
                    {
                        id: useId(),
                        content: 'Fluid'
                    },
                    {
                        id: useId(),
                        content: 'Container'
                    },
                    {
                        id: useId(),
                        content: 'Blank'
                    }
                ]
            },
            {
                id: useId(),
                content: 'Front Pages',
                icon: FromtPages,
                select: [
                    {
                        id: useId(),
                        content: 'Landing'
                    },
                    {
                        id: useId(),
                        content: 'Pricing'
                    },
                    {
                        id: useId(),
                        content: 'Payment'
                    },
                    {
                        id: useId(),
                        content: 'Checkout'
                    },
                    {
                        id: useId(),
                        content: 'Help Center'
                    }
                ]
            }
        ]
    },
    {
        id: useId(),
        title: 'Apps & Pages',
        group: [
            {
                id: useId(),
                content: 'Email',
                icon: Mail
            },
            {
                id: useId(),
                content: 'Chat',
                icon: Chat
            },
            {
                id: useId(),
                content: 'Calendar',
                icon: Calendar
            },
            {
                id: useId(),
                content: 'Kanban',
                icon: DragDrop
            },
            {
                id: useId(),
                content: 'eCommerce',
                icon: Shop,
                select: [
                    {
                        id: useId(),
                        content: 'Dashboard'
                    },
                    {
                        id: useId(),
                        content: 'Products'
                    },
                    {
                        id: useId(),
                        content: 'Order'
                    },
                    {
                        id: useId(),
                        content: 'Customer'
                    },
                    {
                        id: useId(),
                        content: 'Manage Reviews'
                    },
                    {
                        id: useId(),
                        content: 'Referrals'
                    },
                    {
                        id: useId(),
                        content: 'Settings'
                    }
                ]
            },
            {
                id: useId(),
                content: 'Academy',
                icon: Graduation,
                select: [
                    {
                        id: useId(),
                        content: 'Dashboard'
                    },
                    {
                        id: useId(),
                        content: 'My Course'
                    },
                    {
                        id: useId(),
                        content: 'Course Details'
                    }
                ]
            },
            {
                id: useId(),
                content: 'Logistics',
                icon: Car,
                select: [
                    {
                        id: useId(),
                        content: 'Dashboard'
                    },
                    {
                        id: useId(),
                        content: 'Fleet'
                    }
                ]
            },
            {
                id: useId(),
                content: 'Invoice',
                icon: Bill,
                select: [
                    {
                        id: useId(),
                        content: 'List'
                    },
                    {
                        id: useId(),
                        content: 'Preview'
                    },
                    {
                        id: useId(),
                        content: 'Edit'
                    },
                    {
                        id: useId(),
                        content: 'Add'
                    }
                ]
            },
            {
                id: useId(),
                content: 'Users',
                icon: User,
                select: [
                    {
                        id: useId(),
                        content: 'List'
                    },
                    {
                        id: useId(),
                        content: 'View'
                    }
                ]
            },
            {
                id: useId(),
                content: 'Roles & Permissions',
                icon: Lock,
                select: [
                    {
                        id: useId(),
                        content: 'Roles'
                    },
                    {
                        id: useId(),
                        content: 'Permission'
                    }
                ]
            },
            {
                id: useId(),
                content: 'Pages',
                icon: LayoutLeft,
                select: [
                    {
                        id: useId(),
                        content: 'User Profile'
                    },
                    {
                        id: useId(),
                        content: 'Account Settings'
                    },
                    {
                        id: useId(),
                        content: 'FAQ'
                    },
                    {
                        id: useId(),
                        content: 'Pricing'
                    },
                    {
                        id: useId(),
                        content: 'Misc'
                    }
                ]
            },
            {
                id: useId(),
                content: 'Authentications',
                icon: Shield,
                select: [
                    {
                        id: useId(),
                        content: 'Login'
                    },
                    {
                        id: useId(),
                        content: 'Register'
                    },
                    {
                        id: useId(),
                        content: 'Verify Email'
                    },
                    {
                        id: useId(),
                        content: 'Reset Password'
                    },
                    {
                        id: useId(),
                        content: 'Forgot Password'
                    },
                    {
                        id: useId(),
                        content: 'Two Steps'
                    }
                ]
            },
            {
                id: useId(),
                content: 'Wizard Examples',
                icon: GitCommit,
                select: [
                    {
                        id: useId(),
                        content: 'Checkout'
                    },
                    {
                        id: useId(),
                        content: 'Property Listing'
                    },
                    {
                        id: useId(),
                        content: 'Create Deal'
                    }
                ]
            },
            {
                id: useId(),
                content: 'Modal Example',
                icon: TV
            }
        ]
    },
    {
        id: useId(),
        title: 'Components',
        group: [
            {
                id: useId(),
                content: 'Cards',
                icon: BankCard,
                select: [
                    {
                        id: useId(),
                        content: 'Basic'
                    },
                    {
                        id: useId(),
                        content: 'Adwance'
                    },
                    {
                        id: useId(),
                        content: 'Statistics'
                    },
                    {
                        id: useId(),
                        content: 'Analitics'
                    },
                    {
                        id: useId(),
                        content: 'Gamifications'
                    },
                    {
                        id: useId(),
                        content: 'Actions'
                    }
                ]
            },
            {
                id: useId(),
                content: 'User interface',
                icon: Toggle,
                select: [
                    {
                        id: useId(),
                        content: 'Accordion'
                    },
                    {
                        id: useId(),
                        content: 'Alerts',
                        link: Routes.ALERTS
                    },
                    {
                        id: useId(),
                        content: 'Badges'
                    },
                    {
                        id: useId(),
                        content: 'Buttons',
                        link: Routes.BUTTONS
                    },
                    {
                        id: useId(),
                        content: 'Carousel'
                    },
                    {
                        id: useId(),
                        content: 'Collapse'
                    },
                    {
                        id: useId(),
                        content: 'Dropdowns'
                    },
                    {
                        id: useId(),
                        content: 'Footer'
                    },
                    {
                        id: useId(),
                        content: 'List Groups'
                    },
                    {
                        id: useId(),
                        content: 'Modals'
                    },
                    {
                        id: useId(),
                        content: 'Navbar'
                    },
                    {
                        id: useId(),
                        content: 'Offcanvas'
                    },
                    {
                        id: useId(),
                        content: 'Pagination & Breadcrumbs'
                    },
                    {
                        id: useId(),
                        content: 'Progress'
                    },
                    {
                        id: useId(),
                        content: 'Spinners'
                    },
                    {
                        id: useId(),
                        content: 'Tabs & Pills'
                    },
                    {
                        id: useId(),
                        content: 'Toasts'
                    },
                    {
                        id: useId(),
                        content: 'Tooltips & Popovers'
                    },
                    {
                        id: useId(),
                        content: 'Typography'
                    }
                ]
            },
            {
                id: useId(),
                content: 'Extended UI',
                icon: Box,
                select: [
                    {
                        id: useId(),
                        content: 'Avatar'
                    },
                    {
                        id: useId(),
                        content: 'BlockUI'
                    },
                    {
                        id: useId(),
                        content: 'Drag & Drop'
                    },
                    {
                        id: useId(),
                        content: 'Media Player'
                    },
                    {
                        id: useId(),
                        content: 'Perfect Scrollbar'
                    },
                    {
                        id: useId(),
                        content: 'Star Ratings'
                    },
                    {
                        id: useId(),
                        content: 'SweetAlert2'
                    },
                    {
                        id: useId(),
                        content: 'Text Divider'
                    },
                    {
                        id: useId(),
                        content: 'Timeline'
                    },
                    {
                        id: useId(),
                        content: 'Tour'
                    },
                    {
                        id: useId(),
                        content: 'Treeview'
                    },
                    {
                        id: useId(),
                        content: 'Miscellaneous'
                    }
                ]
            },
            {
                id: useId(),
                content: 'Icons',
                icon: Remixicon
            }
        ]
    },
    {
        id: useId(),
        title: 'Forms & Tables',
        group: [
            {
                id: useId(),
                content: 'Form Elements',
                icon: Radio,
                select: [
                    {
                        id: useId(),
                        content: 'Basic Inputs'
                    },
                    {
                        id: useId(),
                        content: 'Input groups'
                    },
                    {
                        id: useId(),
                        content: 'Custom Options'
                    },
                    {
                        id: useId(),
                        content: 'Editors'
                    },
                    {
                        id: useId(),
                        content: 'File Upload'
                    },
                    {
                        id: useId(),
                        content: 'Pickers'
                    },
                    {
                        id: useId(),
                        content: 'Select & Tags'
                    },
                    {
                        id: useId(),
                        content: 'Sliders'
                    },
                    {
                        id: useId(),
                        content: 'Switches'
                    },
                    {
                        id: useId(),
                        content: 'Exstras'
                    }
                ]
            },
            {
                id: useId(),
                content: 'Form Layouts',
                icon: Box,
                select: [
                    {
                        id: useId(),
                        content: 'Vertical Form'
                    },
                    {
                        id: useId(),
                        content: 'Horizontal Form'
                    },
                    {
                        id: useId(),
                        content: 'Sticky Actions'
                    }
                ]
            },
            {
                id: useId(),
                content: 'Form Wizard',
                icon: GitCommit,
                select: [
                    {
                        id: useId(),
                        content: 'Numbered'
                    },
                    {
                        id: useId(),
                        content: 'Icons'
                    }
                ]
            },
            {
                id: useId(),
                content: 'Form Validation',
                icon: Checkbox
            },
            {
                id: useId(),
                content: 'Tables',
                icon: Tables
            },
            {
                id: useId(),
                content: 'Datatables',
                icon: Grid,
                select: [
                    {
                        id: useId(),
                        content: 'Basic'
                    },
                    {
                        id: useId(),
                        content: 'Advanced'
                    },
                    {
                        id: useId(),
                        content: 'Extensions'
                    }
                ]
            }
        ]
    },
    {
        id: useId(),
        title: 'Charts & Maps',
        group: [
            {
                id: useId(),
                content: 'Charts',
                icon: BarChart,
                select: [
                    {
                        id: useId(),
                        content: 'Apex Charts'
                    },
                    {
                        id: useId(),
                        content: 'ChartJs'
                    }
                ]
            },
            {
                id: useId(),
                content: 'Liafelet Maps',
                icon: Map
            }
        ]
    },
    {
        id: useId(),
        title: 'Masc',
        group: [
            {
                id: useId(),
                content: 'Supports',
                icon: Lifebuoy
            },
            {
                id: useId(),
                content: 'Documentation',
                icon: Article
            }
        ]
    }
]);
</script>