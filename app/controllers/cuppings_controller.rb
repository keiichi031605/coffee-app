class CuppingsController < ApplicationController
  before_action :set_cupping, only: %i[ show update destroy ]

  # GET /cuppings
  def index
    @cuppings = Cupping.all

    render json: @cuppings
  end

  # GET /cuppings/1
  def show
    render json: @cupping
  end

  # POST /cuppings
  def create
    @cupping = Cupping.new(cupping_params)

    if @cupping.save
      render json: @cupping, status: :created, location: @cupping
    else
      render json: @cupping.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /cuppings/1
  def update
    if @cupping.update(cupping_params)
      render json: @cupping
    else
      render json: @cupping.errors, status: :unprocessable_entity
    end
  end

  # DELETE /cuppings/1
  def destroy
    @cupping.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_cupping
      @cupping = Cupping.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def cupping_params
      params.fetch(:cupping, {})
    end
end
