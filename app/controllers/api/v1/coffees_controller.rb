class Api::V1::CoffeesController < ApplicationController
  before_action :set_coffee, only: %i[ show update destroy ]

  # GET /coffees
  def index
    # TODO: may need to use pundit authorization
    if @current_user
      coffees = @current_user.coffees.includes(:origin).map do |coffee|
        coffee_attributes = coffee.as_json(except: [:user_id, :origin_id, :created_at, :updated_at])
        origin_attributes = coffee.origin.as_json(only: [:name, :country])
      
        coffee_attributes.merge(
          'origin' => origin_attributes['name'],
          'country' => origin_attributes['country'].capitalize
        )
      end

      render json: {
        status: { code: 200, message: 'coffee list is successfully extracted' },
        metadata: coffees
      }
    else
      render json: { status: { code: 401, message: 'session expired' } }
    end
  end

  # GET /coffees/1
  def show
    render json: @coffee
  end

  # POST /coffees
  def create
    @coffee = @current_user.coffees.new(coffee_params)
    if @coffee.save
      render json: {
        status: { code: 200, message: 'coffee is successfully created' }
      }
    else
      render json: @coffee.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /coffees/1
  def update
    if @coffee.update(coffee_params)
      render json: @coffee
    else
      render json: @coffee.errors, status: :unprocessable_entity
    end
  end

  # DELETE /coffees/1
  def destroy
    @coffee.destroy
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_coffee
    @coffee = Coffee.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def coffee_params
    # params.fetch(:coffee, {})
    params.require(:coffee).permit(:name)
  end
end
