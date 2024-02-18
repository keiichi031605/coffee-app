class Api::V1::RoastingsController < ApplicationController
  before_action :set_roasting, only: %i[ show update destroy ]

  # GET /roastings
  def index
    @roastings = Roasting.all

    render json: @roastings
  end

  # GET /roastings/1
  def show
    render json: @roasting
  end

  # POST /roastings
  def create
    @roasting = Roasting.new(roasting_params)

    if @roasting.save
      render json: @roasting, status: :created, location: @roasting
    else
      render json: @roasting.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /roastings/1
  def update
    if @roasting.update(roasting_params)
      render json: @roasting
    else
      render json: @roasting.errors, status: :unprocessable_entity
    end
  end

  # DELETE /roastings/1
  def destroy
    @roasting.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_roasting
      @roasting = Roasting.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def roasting_params
      params.fetch(:roasting, {})
    end
end
