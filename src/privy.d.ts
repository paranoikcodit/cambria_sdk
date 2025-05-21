export interface PrivyAuthenticateResponse {
	user: User;
	token: string;
	privy_access_token: any;
	refresh_token: string;
	identity_token: string;
	session_update_action: string;
	is_new_user: boolean;
}

export interface User {
	id: string;
	created_at: number;
	linked_accounts: LinkedAccount[];
	mfa_methods: any[];
	has_accepted_terms: boolean;
	is_guest: boolean;
}

export interface LinkedAccount {
	type: string;
	address: string;
	chain_type: string;
	chain_id: string;
	wallet_client: string;
	wallet_client_type: string;
	connector_type: string;
	verified_at: number;
	first_verified_at: number;
	latest_verified_at: number;
}
