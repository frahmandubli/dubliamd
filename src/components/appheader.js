import React from 'react';
class appheader extends React.Component {
    render() {
        return (
            <div class="navbar container">
                <div class="navbar-inner">
                    <div class="container">
                        <a class="brand" href="." title="Database for Affiliates and Merchants">Database for Affiliates and Merchants</a>
                        <nav class="pull-right">
                            <ul class="nav">
                                <li>
                                    <a href="."><strong>Welcome User</strong></a>
                                </li>
                                <li>
                                    <a href="./ExportDatabase/Index"><strong>Export Database</strong></a>
                                </li>
                                <li>
                                    <a href="./Account/Login"><strong>Login</strong></a>
                                </li>
                                <li class="divider-vertical"></li>
                                <li class="dropdown">
                                    <a href="./Home/Index" class="dropdown-toggle" data-toggle="dropdown">
                                        Malls
                                        <b class="caret"></b>
                                    </a>
                                    <ul class="dropdown-menu pull-right">

                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}
export default appheader;