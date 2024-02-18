class ApplicationController < ActionController::API
  before_action :configure_permitted_parameters, if: :devise_controller?
  protected
  before_action :authenticate_current_user
  attr_reader :current_user

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: %i[name avatar])
    devise_parameter_sanitizer.permit(:account_update, keys: %i[name avatar])
  end

  private

  def authenticate_current_user
    header = request.headers['Authorization']
    header = header.split(' ').last if header
    begin
      jwt_payload = JWT.decode(header, Rails.application.credentials.devise_jwt_secret_key!).first
      @current_user = User.find(jwt_payload['sub'])
    rescue JWT::DecodeError, ActiveRecord::RecordNotFound
      render json: { errors: ['Not Authenticated'] }, status: :unauthorized
    end
  end
end
