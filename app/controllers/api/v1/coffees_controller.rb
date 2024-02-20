class Api::V1::CoffeesController < ApplicationController
  before_action :set_coffee, only: %i[ show update destroy ]

  # GET /coffees
  def index
    # TODO: may need to use pundit authorization
    if @current_user
      @coffees = @current_user.coffees.as_json(except: [:user_id, :origin_id, :created_at, :updated_at])

      render json: {
        status: { code: 200, message: 'coffee list is successfully extracted' },
        coffees: @coffees
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
    @coffee = Coffee.new(coffee_params)

    if @coffee.save
      render json: @coffee, status: :created, location: @coffee
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
    params.fetch(:coffee, {})
  end
end
