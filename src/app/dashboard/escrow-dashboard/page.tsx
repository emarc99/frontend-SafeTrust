import { WalletEscrowDashboard } from '@/components/escrow/WalletEscrowDashboard';

export const metadata = {
	title: 'Escrow Dashboard | SafeTrust',
	description: 'Monitor and manage your escrows across all roles',
};

export default function EscrowDashboardPage() {
	return <WalletEscrowDashboard />;
}

