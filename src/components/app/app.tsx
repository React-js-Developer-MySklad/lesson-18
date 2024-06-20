import React from "react";
import {ErrorBoundary} from "../error-boundary/ErrorBoundary";
import {DashboardPage} from "../../pages/dashboard/dashboard-page";

export const App: React.FC = () => {
    return (
        <ErrorBoundary>
                <main>
                    <h1>Final Form</h1>
                    <DashboardPage/>
                </main>
        </ErrorBoundary>
    )
}